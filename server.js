import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8085;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.resolve('public')));

// Rota padrão
app.get('/', (req, res) => {
  res.sendFile(path.resolve('src/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});