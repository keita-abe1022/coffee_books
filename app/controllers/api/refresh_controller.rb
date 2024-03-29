class Api::RefreshController < ApplicationController
  before_action :authorized_refresh_by_access_request!
  
  def create 
    session = JWTSessions::Session.new(payload: claimless_payload, refresh_by_access_allowed: true)
      tokens = session.refresh_by_access_payload do
        raise JWTSessions::Errors::Unauthorized, "Something not right here!"
      end
      response.set_cookie(JWTSessions.access_cookie,
                                      value: tokens[:access],
                                      httponly: true,
                                      secure: Rails.env.production?)
      render json: { csrf: tokens[:csrf] }
    end
  end

end
