defmodule ThlkWeb.Auth.Guardian do
  use Guardian, otp_app: :thlk

  def subject_for_token(resource, _claims) do
    sub = to_string(resource.id)
    {:ok, sub}
  end

  def resource_from_claims(claims) do
    id = claims["sub"]
    resource = Thlk.Accounts.get_user!(id)
    {:ok, resource}
  end
end