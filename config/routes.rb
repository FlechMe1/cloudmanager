Rails.application.routes.draw do

  mount RailsEmailPreview::Engine, at: 'emails'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    passwords: 'users/passwords'
  }

  authenticated :user do
    resources :products
    resources :events

    root to: 'pages#home', as: :authenticated_user
  end
  root to: redirect('/users/sign_in')
end
