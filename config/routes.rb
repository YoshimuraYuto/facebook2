Rails.application.routes.draw do
  resources :contacts
  resources :feeds do
    collection do
      post :confirm
    end
  end

  resources :blogs
  resources :sessions, only: [:new, :create, :destroy]
  resources :users
  get '/', to: 'users#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
