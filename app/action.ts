"use server"

import prisma from "@/lib/prisma";
import { randomBytes } from "crypto";

const generateUniqueId = async () => {
    let uniqueId;
    let isUnique = false;

    while (!isUnique) {
        uniqueId = randomBytes(3).toString('hex'); // Generates a 6-character hex string
        const existingFact = await prisma.invoice.findUnique({
            where: { id : uniqueId }
        });
        if (!existingFact) {
            isUnique = true;
        }
    }
    return uniqueId;
}

export async function checkAndAddUser(email:string, name:string) {
    if(!email)return;
    try{
        const existingUser = await prisma.user.findUnique({where: {email: email}});
        if(!existingUser && name) {
            await prisma.user.create({
                data: {email, name}
            });        }
    }catch (error) {
        console.error("Error checking or adding user:", error);
    }
}

export async function createEmptyFact(email:string, name:string){
    try {
        const user = await prisma.user.findUnique({where: {email: email}});
        const factID = await generateUniqueId() as string;
        if(user){
            const newFact = await prisma.invoice.create({
            data:{
                id: factID, 
                name:name,
                userId: user?.id,                
                issuerName: "", 
                issuerAddress: "",
                clientName:"",
                clientAddress:"",
                invoiceDate:"",
                dueDate:"",
                vatActive : false,
                vatRate : 20
            }
        });
        }
    } catch (error) {
        console.error("Error creating empty fact:", error);        
    }
} 