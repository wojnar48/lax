module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user
    def connect
     self.current_user = find_verified_user
     logger.add_tags current_user.username
    end

    def session
      cookies.encrypted[Rails.application.config.session_options[:key]]
    end

    protected

    def find_verified_user
     if current_user = User.find_by(session_token: session["session_token"])
       current_user
     else
       reject_unauthorized_connection
     end
    end
  end
end
