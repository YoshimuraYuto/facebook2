class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if params[:back]
      render :new
    else
      if @user.save
        # 保存の成功した場合の処理
        redirect_to user_path(@user.id)
      else
        render 'new'
      end
    end
  end

  def show
  end

  def edit
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'List was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def index
    @users = User.all
  end

  def confirm
  end

  def destroy
    @user.destroy
    redirect_to users_path, notice:"ブログを削除しました！"
  end

  def confirm
    @user = User.new(user_params)
    render :new if @user.invalid?
  end

  private
  
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :image, :image_cache, :content)
  end
end
