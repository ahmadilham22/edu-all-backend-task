import { prismaClient } from '../app/database.js';

const get = async (req) => {
  const { search, page = 1, limit = 10 } = req.query;

  const filter = search
    ? {
        OR: [
          { brand: { contains: search, mode: 'insensitive' } },
          { model: { contains: search, mode: 'insensitive' } },
        ],
      }
    : {};

  const result = await prismaClient.product.findMany({
    where: filter,
    skip: (page - 1) * limit,
    take: parseInt(limit),
  });

  const totalItems = await prismaClient.product.count({ where: filter });

  return {
    result,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: parseInt(page),
  };
};

export default { get };
