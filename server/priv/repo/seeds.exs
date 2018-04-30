alias Thlk.{Posts, Repo}

mock_photos = 9

photos_list = [
  "https://images.unsplash.com/photo-1504633273314-6a929fcd7090?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73aeff1876133560dbd3555e9c3d0ad1&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1506682346094-f6b22bf130eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8766e60119d3bc8c1dc02916936844e6&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1507736068714-562a1aba9110?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2765df2f4f1c2cb19b23914f45c59a5&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1509955252650-8f558c2b8735?ixlib=rb-0.3.5&s=1d6edab10fbc7e55dae8792ff993f0f8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1508806978120-5c62d4e2732e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3fc2f14c9e35048beef449f23a02d499&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1501473160872-bdac6e2f9a3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9305ca3f3dc306b8b55457056d1db22&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1505975781673-1bf5edb977eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18f526c2a91818d5c54773948076dead&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1502236928994-d4db1522a6d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ded541249235e0ce58ee2141d7ce2e6&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1507219999931-a1c7247ad1ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22139a28474a85196b2bffe2894dcc36&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eec3a44bcc98d7103d182be01fbc7918&auto=format&fit=crop&w=500&q=60"

]

for idx <- 0..mock_photos do
  photo = %{
    image_url: Enum.at(photos_list, idx),
    caption: Faker.Lorem.Shakespeare.hamlet
  }

  %Posts.Photo{}
  |> Posts.Photo.changeset(photo)
  |> Repo.insert!
end