"use server"

import prisma from "@/lib/prisma";
import { randomBytes } from "crypto";

const generateUniqueId = async () => {
    let uniqueId;
    let isUnique = false;

    while (!isUnique) {
        uniqueId = randomBytes(3).toString('hex'); // Generates a 6-character hex string
        const existingFact = await prisma.invoice.findUnique({
            where: { id: uniqueId }
        });
        if (!existingFact) {
            isUnique = true;
        }
    }
    return uniqueId;
}

export async function checkAndAddUser(email: string, name: string) {
    if (!email) return;
    try {
        const existingUser = await prisma.user.findUnique({ where: { email: email } });
        if (!existingUser && name) {
            await prisma.user.create({
                data: { email, name }
            });
        }
    } catch (error) {
        console.error("Error checking or adding user:", error);
    }
}

export async function createEmptyFact(email: string, name: string) {
    if (!email) return;
    try {
        const user = await prisma.user.findUnique({ where: { email: email } });
        const factID = await generateUniqueId() as string;
        if (user) {
            const newFact = await prisma.invoice.create({
                data: {
                    id: factID,
                    name: name,
                    userId: user?.id,
                    issuerName: "",
                    issuerAddress: "",
                    clientName: "",
                    clientAddress: "",
                    invoiceDate: "",
                    dueDate: "",
                    vatActive: false,
                    vatRate: 20
                }
            });
        }
    } catch (error) {
        console.error("Error creating empty fact:", error);
    }
}

export async function getInvoiceByEmail(email: string) {
    if (!email) return;
    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            include: { invoices: { include: { lines: true } } }
        });

        // Status possibles : 
        // 1. Brouion
        // 2. En attente 
        // 3. Payé
        // 4. Annulé
        // 5. Impayé

        if (user) {
            const today = new Date();
            const updateInvoices = await Promise.all(
                user.invoices.map(async (invoice) => {
                    const dueDate = new Date(invoice.dueDate);
                    if (dueDate < today && invoice.status === 2) {
                        const updateInvoice = await prisma.invoice.update({
                            where: { id: invoice.id },
                            data: { status: 5 }, // Update status to "Impayé"
                            include: { lines: true }
                        });
                        return updateInvoice;
                    }
                    return invoice;
                })
            );
            return updateInvoices;
        }
    } catch (error) { 
        console.error("Error fetching invoices by email:", error);
    }
}

export async function getInvoiceById(invoiceId: string) {
    if (!invoiceId) return;
    try {
        const invoice = await prisma.invoice.findUnique({
            where: { id: invoiceId },
            include: { lines: true }
        });
        if (!invoice) {
            throw new Error("Invoice not found");
        }
        
        return invoice;
    } catch (error) {
        console.error("Error fetching invoice by ID:", error);
    }
}