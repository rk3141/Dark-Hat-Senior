import search from "./music";
import * as Discord from "discord.js";
import { readFileSync } from "fs"
const client = new Discord.Client();

client.once(
	"ready", () => {
		console.log('Go!')
		client.user.setActivity("xhelp");
	}
)

let subs = [];

client.setInterval(
	async () => {
		const res = await search("whitehat jr exposed");
		subs.forEach(
			(sub) => {
				sub.send(`**${res.title}**\nLink: ${res.url}`)
			}
		);
	},
	60*60*1000
)

client.on(
	"message",
	(msg) => {
		if (msg.content == "xhelp") {
			msg.channel.send('\
`dssr-sub`: Subscribe hourly exposing\n\
`dssr-usub`: Unsubscribe\n\
`expose`: Expose\n\
')
		}
		if (msg.content == "dssr-sub") {
			if (subs.filter(u => u == msg.author) == [])
			{
				subs.push(msg.author)
			}
		}
		if (msg.content == "dssr-usub") {
			subs = subs.filter(u => u != msg.author)
		}
		if (msg.content != "expose") {return;}
		search("whitehat jr exposed")
			.then
			(
				(res) => {
				msg.channel.send(`**${res.title}**\nLink: ${res.url}`)
				}
			)
	}
)

client.login("Nzg1MzkzOTU2NDc2MTU3OTcy.X83NHw.ith84FOg9Mmp4bgTdLKV5WKnWTs")
