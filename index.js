require("dotenv").config({ path: `${__dirname}/.env` });
const { Client } = require("discord.js");
const client = new Client({ intents: 0 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
console.log(`Booting up`);
client.on("ready", async () => {
    await sleep(500);
    console.log(`${client.user.tag}->${client.user.id}`);
    console.log(`Invite URL: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8`);
    await client.application.commands.set([{ name: "refresh", description: "Você precisa usar este comando pelo menos uma vez por mês para manter o distintivo." }]);
});

client.on(
    "interactionCreate",
    async (interaction) =>
        await interaction.reply({
            content: "Seu Desenvolvedor DiscordAtivo foi atualizado - lembre-se de que pode levar até 24 horas para que ele apareça, pois o Discord faz verificação uma vez por dia.",
            ephemeral: true,
        })
);

client.login(process.env.token);