import {prisma} from "../../config/prisma.js";

export const createUser = async (data) => {
    return await prisma.Cliente.create({
      data: {
        name: data.name,
        email: data.email,
        endereco: data.endereco,
        password: data.password,
        telefone: data.telefone,
      },
    });
};

export const findUserByEmail = async (email) => {
  return await prisma.Cliente.findUnique({
    where: {
      email: email,
    },
  });
};

export const updateEmail = async (IdCliente, data) => {
  return await prisma.Cliente.update({
    where: {
      IdCliente,
    },
    data: {
      email: data.email,
    },
  });
};

export const deleteClient = async (IdCliente) => {
  return await prisma.Cliente.delete({
    where: {
      IdCliente,
    },
  });
};
