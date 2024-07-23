import { PrismaClient } from "@prisma/client";


const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV === "production" ) {
    global.prismadb = client;
    
}

export default client;


// prismaClient.ts
import { PrismaClient as BotPrismaClient } from '@prisma/client';
import { PrismaClient as DashboardPrismaClient } from '@prisma/client';

const botPrisma = new BotPrismaClient();
const dashboardPrisma = new DashboardPrismaClient();

export { botPrisma, dashboardPrisma };
