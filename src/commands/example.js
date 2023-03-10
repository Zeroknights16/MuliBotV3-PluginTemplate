const Discord = require('discord.js');
const commandManager = require('../../../../src/modules/commands/manager.js');

module.exports = class AddCommand extends commandManager {
	constructor(client) {
		super(client, {
			data: new Discord.SlashCommandBuilder()
				.setName('test')
				.setDescription('Test command')
				.addUserOption(option => option.setName('user').setDescription('User')),
			category: 'general',
		});
	}

	async execute(interaction) {
		interaction.reply({ content: 'hello world' });
	}
};
