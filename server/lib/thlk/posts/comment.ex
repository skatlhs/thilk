defmodule Thlk.Posts.Comment do
  use Ecto.Schema
  import Ecto.Changeset
  alias Thlk.Posts.Comment


  schema "photo_comments" do
    field :text, :string

    belongs_to :user, Thlk.Accounts.User
    belongs_to :photo, Thlk.Posts.Photo

    timestamps()
  end

  @doc false
  def changeset(%Comment{} = comment, attrs) do
    comment
    |> cast(attrs, [:text, :user_id, :photo_id])
    |> validate_required([:text, :user_id, :photo_id])
  end
end