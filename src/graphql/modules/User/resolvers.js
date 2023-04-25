import { db } from "../../../db/index.js";

const resolvers = {
  Query : {
    usuarios : db.usuarios,
    usuario : (_, args) => db.findUsuario(args.id),
    pesquisaUsuario : (_, args) => db.searchUsuario(args.nome)
  },

  User : {
    perfil(obj){
      return db.perfis().find((p) => obj.perfil == p.id).descricao;
    }
  },

  Mutation : {
    cadastrarUsuario :  (_, {data}) => db.cadastrarUsuario(data),
    atualizarUsuario :  (_, {id, data}) => db.atualizarUsuario(id, data),
    deletarUsuario :    (_, {id}) => db.deletarUsuario(id),
  }
};

export default { resolvers };