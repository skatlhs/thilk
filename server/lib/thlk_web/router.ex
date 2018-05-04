defmodule ThlkWeb.Router do
  use ThlkWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug ThlkWeb.Context
  end

  scope "/api" do
    pipe_through :api
      
    forward "/graphql", Absinthe.Plug,
      schema: ThlkWeb.Schema
          
    if Mix.env == :dev do
        forward "/graphiql", Absinthe.Plug.GraphiQL,
            schema: ThlkWeb.Schema  
    end
  end
end
