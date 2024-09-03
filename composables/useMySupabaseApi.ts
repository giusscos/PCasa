export const useMySupabaseApi = () => {
  const client = useSupabaseClient();

  const signUpFn = async (credentials: { email: string; password: string }) => {
    try {
      const { data, error } = await client.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) throw error;

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const loginFn = async (credentials: { email: string; password: string }) => {
    try {
      const { error } = await client.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) throw error;

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const logoutFn = async () => {
    try {
      const { error } = await client.auth.signOut();

      if (error) throw error;

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async (tableName: string, select: string = "*") => {
    try {
      const { data, error } = await client.from(tableName).select(select);

      if (error) throw error;

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataId = async (
    tableName: string,
    idColumnName: string,
    id: number,
    select: string = "*"
  ) => {
    try {
      const { data, error } = await client
        .from(tableName)
        .select(select)
        .eq(idColumnName, id);

      if (error) throw error;

      return data[0];
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataWithLimit = async (
    tableName: string,
    limit: number,
    select: string = "*"
  ) => {
    try {
      const { data, error } = await client
        .from(tableName)
        .select(select)
        .range(0, limit);

      if (error) throw error;

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const createFn = async (tableName: string, params: any) => {
    try {
      const { data, error } = await client
        .from(tableName)
        .insert(params)
        .select();

      if (error) throw error;

      return data[0];
    } catch (error) {
      console.log(error);
    }
  };

  const createStorageFile = async (
    bucketName: string,
    productId: number,
    images: any
  ) => {
    try {
      const imagesData: string[] = [];

      for (const image of images) {
        const { data, error } = await client.storage
          .from(bucketName)
          .upload(`${productId}/${image.uuid}`, image.file);

        if (error) throw error;

        imagesData.push(data.path.split("/")[1]);
      }

      return imagesData;
    } catch (error) {
      console.log(error);
    }
  };

  const updateFn = async (
    tableName: string,
    idColumnName: string,
    id: number,
    params: never,
    select: string = "*"
  ) => {
    try {
      const { data, error } = await client
        .from(tableName)
        .update(params)
        .eq(idColumnName, id)
        .select(select);

      if (error) throw error;

      return data[0];
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFn = async (
    tableName: string,
    idColumnName: string,
    id: number
  ) => {
    try {
      const { error } = await client
        .from(tableName)
        .delete()
        .eq(idColumnName, id);

      if (error) throw error;

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStorage = async (
    bucketName: string,
    idFolder: number,
    imageArray: string[]
  ) => {
    try {
      for (const image of imageArray) {
        const { error } = await client.storage
          .from(bucketName)
          .remove([`${idFolder}/${image}`]);

        if (error) throw console.log(error);

        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    signUpFn,
    loginFn,
    logoutFn,
    fetchData,
    fetchDataId,
    fetchDataWithLimit,
    createFn,
    createStorageFile,
    updateFn,
    deleteFn,
    deleteStorage,
  };
};
