Versão final do projeto Alunos
- MELHORIAS IMPLEMENTADAS
- Lista de alunos somente acessível para usuários logados
- Ao atualizar dados de usuário, caso o o e-mail informado for atualizado e a alteração for concluída com sucesso, o sistema deslogará o usuário, solicitando ao mesmo que refaça o login.
- Deleção de usuário
- Estilizado componente Loading
- Ajustado responsividade
- Dupla confirmação substituída por Dialog
- Input file pré-setado para exibir apenas imagens ao usuário.
- Caso apresente erro ao enviar a imagem, o usuário será redirecionado para a rota de edição do aluno que falhou o envio da imagem


Notas:
- Na home(onde listamos os alunos), se o usuário não estiver logado, ele é direcionado para a rota login e o link para a home, no nav, não é exibido.
- Após logado, o usuário será redirecionado diretamente para a lista de alunos e o link para home no nav volta a ser exibido.
-  Para fotos, customizado input file para que, no padrão, o usuário veja somentes imagens ao localizar arquivos. Caso ocorra problema com o envio da imagem, é exibido erro e retornado a página de edição do aluno

CORREÇÃO FUTURA:
Warnings nas rotas /alunos, /aluno e /register
1 - prop 'to' de Link é requerido mas está undefined
2 - link dentro de link


MELHORIA FUTURA PROPOSTA
- Assim que clicar na câmera já selecionar imagem(excluir página Photo)
- Enquanto página de alunos estiver sendo exibida, atualizar lista de alunos de tempos em tempos
- Fazer galeria de imagens para aluno

