const paginate = (result) => {
  return {
    ...result,
    totalPages: Math.ceil(result.count / result.limit),
  };
};

module.exports = {
  paginate,
};
