const router = require('express').Router();

const ClienteController = require('./controllers/clienteController');
router.get('/cliente', ClienteController.get);
router.get('/cliente/lista', ClienteController.getAll);
router.post('/cliente', ClienteController.post);
router.delete('/cliente', ClienteController.delete);
router.put('/cliente', ClienteController.put);

const OperadorController = require('./controllers/operadorController');
router.get('/operador', OperadorController.get);
router.get('/operador/lista', OperadorController.getAll);
router.post('/operador', OperadorController.post);
router.delete('/operador', OperadorController.delete);
router.put('/operador', OperadorController.put);

const VeiculoController = require('./controllers/veiculoController');
router.get('/veiculo', VeiculoController.get);
router.get('/veiculo/lista', VeiculoController.getAll);
router.post('/veiculo', VeiculoController.post);
router.delete('/veiculo', VeiculoController.delete);
router.put('/veiculo', VeiculoController.put);

const LocacaoController = require('./controllers/locacaoController');
router.get('/locacao/simular', LocacaoController.simularLocacao);
router.get('/locacao/vistoriar', LocacaoController.vistoriar);

const AgendamentoController = require('./controllers/agendamentoController');
router.get('/agendamento/porId', AgendamentoController.getById);
router.get('/agendamento/porPlaca', AgendamentoController.getByPlaca);
router.get('/agendamento/lista', AgendamentoController.getAll);
router.post('/agendamento', AgendamentoController.post);
router.delete('/agendamento', AgendamentoController.delete);
router.put('/agendamento', AgendamentoController.put);

const MarcaController = require('./controllers/marcaController');
router.get('/marca', MarcaController.get);
router.post('/marca', MarcaController.post);
router.delete('/marca', MarcaController.delete);
router.put('/marca', MarcaController.put);

const AcessoController = require('./controllers/acessoController');
router.post('/acesso/criarUsuario', AcessoController.criarUsuario);
router.get('/acesso/validarLogin', AcessoController.validarLogin);
router.delete('/acesso', AcessoController.delete);

module.exports = router;
