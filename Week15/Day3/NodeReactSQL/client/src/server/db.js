const db = knex({
    client:'pg',
    connection:{
      host:process.env.DB_HOST,
      port:process.env.DB_PORT,
      user:process.env.DB_USER,
      password:process.env.DB_PASS,
      database:process.env.DB_NAME,
      ssl: { rejectUnauthorized: false }
    }
  });


  const insertText = (value) => {
      return db('test')
      .insert({text:value})
      .returning.text
  }

  