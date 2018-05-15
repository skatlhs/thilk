# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :thlk,
  ecto_repos: [Thlk.Repo]

# Configures the endpoint
config :thlk, ThlkWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "KMjnWAOgmnA69nUGc3s80FCeKfg0g0lhpOZDXb2ma187nwW8FvsTYx8UdETq1Xec",
  render_errors: [view: ThlkWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Thlk.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configure Guardian
config :thlk, ThlkWeb.Auth.Guardian,
    issuer: "thlk",
    verify_issuer: true,
    secret_key: "MSZa1SUBzxLhtHBaVK7h+tAt6cN6hl0uzjQVNcTzNC15PAwDzuAVVqbO3wfhCD2U"

# AWS
config :ex_aws,
  access_key_id: "AKIAIMBFI6LV72RRLOPQ",
  secret_access_key: "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",
  s3: [
    scheme: "https://",
    host: "thilk.s3.amazonaws.com",
    region: "us-east-2"
  ]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
