module.exports = {
	name: 'h',
    description: 'Mostra informació de les comandes',
    aliases: ['commands'],
	usage: '[ nom de la comanda ]',
	execute(message) {
        message.channel.send('!help');
	},
};