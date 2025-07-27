"use server"

import prisma from "@/lib/prisma";



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

    } catch (error) {
        console.error("Error creating empty fact:", error);        
    }
}