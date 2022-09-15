import express, { application } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string";

const app = express();

app.listen(3333);

app.use(express.json());
app.use(cors()); // libera todos os fronts a user o back / passando o arg origin, pode colocar o dominio que sera liberado a fazer as reqs

const prisma = new PrismaClient({
    log: ["query"], // mostrar as querys sendo executadas
});

app.get("/games", async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            // 'dto'/join para add na tabela quantos anuncios tem naquele game
            _count: {
                select: {
                    ads: true,
                },
            },
        },
    });

    return res.json(games);
});

app.post("/games/:id/ads", async (req, res) => {
    const gameId = req.params.id;
    const body = req.body;

    const ad: any = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            discord: body.discord,
            yearsPlaying: body.yearsPlaying,
            weekDays: body.weekDays.join(","),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        },
    });
    return res.status(201).json(ad);
});

app.get("/games/:id/ads", async (req, res) => {
    const gameId = req.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            // response sem o discord
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId: gameId, // ou gameId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return res.json(
        ads.map((ad) => {
            return {
                ...ad,
                weekDays: ad.weekDays.split(","),
                hourStart: convertMinutesToHourString(ad.hourStart),
                hourEnd: convertMinutesToHourString(ad.hourEnd),
            };
        })
    );
});

app.get("/ads/:id/discord", async (req, res) => {
    const adId = req.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        },
    });

    return res.json({
        discord: ad.discord,
    });
});
