use Mix.Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
config :thlk, ThlkWeb.Endpoint,
  secret_key_base: "Q+8r6t8o8TH0FjOuJMeNeBzm0DgOJzPqnrkJ8v8OUr2YVzXQY44YBCB2zigSe9Cy"

# Configure your database
config :thlk, Thlk.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "thlk_prod",
  pool_size: 15
