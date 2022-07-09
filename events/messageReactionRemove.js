module.exports = (client, reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '738666523408990258') {
      switch (name) {
        case '🍎':
          member.roles.remove('738664659103776818');
          break;
        case '🍌':
          member.roles.remove('738664632838782998');
          break;
        case '🍇':
          member.roles.remove('738664618511171634');
          break;
        case '🍑':
          member.roles.remove('738664590178779167');
          break;
      }
    }
}