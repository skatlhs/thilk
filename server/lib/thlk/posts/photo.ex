defmodule Thlk.Posts.Photo do
  use Ecto.Schema
  import Ecto.Changeset
  alias Thlk.Posts.Photo

  schema "photos" do
    field :caption, :string
    field :image_url, :string

    belongs_to :user, Thlk.Accounts.User
    has_many :likes, Thlk.Reactions.LikePhoto
    has_many :comments, Instagram.Posts.Comment

    timestamps()
  end

  @doc false
  def changeset(%Photo{} = photo, attrs) do
    photo
    |> cast(attrs, [:image_url, :caption, :user_id])
    |> validate_required([:image_url, :user_id])
  end
end
