export const GetProducts = async (id = '') => {
  const url = `http://localhost:8080/api/productos/listar/${id}`;
  const data = await fetch(url).then((response) => response.json());
  
  const isArray=Boolean(data?.length)
  
  if(!isArray){   
    const { _id, ...allData } = data;
    return {
      id: _id,
      ...allData
    };
  }

  const items = data.map((item) => {
    return {
      id: item._id,
      timestamp: item.timestamp,
      title: item.nombre,
      description: item.descripcion,
      code: item.codigo,
      stock: item.stock,
      price: item.precio,
      image: item.foto,
    };
  });

  return items;
};
