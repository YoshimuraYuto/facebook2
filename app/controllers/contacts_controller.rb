class ContactsController < ApplicationController

  def index
    @contact = Contact.all
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to contact_path(@contact.id), notice: "お問い合わせ完了しました！"
    else
      # 入力フォームを再描画します。
      render :new
    end
  end

  def show
    @contact = Contact.find(params[:id])
  end

  private

  def contact_params
  params.require(:contact).permit(:name, :email, :content, :title)
  end

end
