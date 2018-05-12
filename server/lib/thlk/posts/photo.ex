defmodule Thlk.Posts.Photo do
  use Ecto.Schema
  import Ecto.Changeset
  alias Thlk.Posts.Photo

  schema "photos" do
    field :caption, :string
    field :image_url, :string

    has_many :likes, Thlk.Reactions.LikePhoto
    timestamps()
  end

  @doc false
  def changeset(%Photo{} = photo, attrs) do
    photo
    |> cast(attrs, [:image_url, :caption])
    |> validate_required([:image_url])
  end
end