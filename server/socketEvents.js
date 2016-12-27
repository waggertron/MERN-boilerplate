module.exports = (io) => {
  io.on('connection', (socket) => {
    process.stdout.write('new socket connection\n');
    socket.emit('message', 'Socket connected to sever through https');
  });
}