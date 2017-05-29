class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private

  def logged_in?
    !!current_user
  end

  def log_in(user)
    user.update(logged_in: true)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def log_out
    user = current_user
    user.reset_session_token!
    session[:session_token] = nil
    user.update(logged_in: false)
  end

  def current_user
    User.find_by(session_token: session[:session_token])
  end
end
