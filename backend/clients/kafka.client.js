const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: '',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: '' });

const initKafka = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: '', fromBeginning: true });
};

module.exports = { consumer, initKafka };
