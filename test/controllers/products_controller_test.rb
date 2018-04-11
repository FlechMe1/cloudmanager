require 'test_helper'

class ProductsControllerTest < ActionController::TestCase
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:products)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create product" do
    assert_difference('Product.count') do
      post :create, product: { buying_price: @product.buying_price, buying_price_new: @product.buying_price_new, description: @product.description, label: @product.label, reference: @product.reference, selling_price: @product.selling_price, selling_price_wt: @product.selling_price_wt, tax_credit: @product.tax_credit, taxes: @product.taxes }
    end

    assert_redirected_to product_path(assigns(:product))
  end

  test "should show product" do
    get :show, id: @product
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @product
    assert_response :success
  end

  test "should update product" do
    patch :update, id: @product, product: { buying_price: @product.buying_price, buying_price_new: @product.buying_price_new, description: @product.description, label: @product.label, reference: @product.reference, selling_price: @product.selling_price, selling_price_wt: @product.selling_price_wt, tax_credit: @product.tax_credit, taxes: @product.taxes }
    assert_redirected_to product_path(assigns(:product))
  end

  test "should destroy product" do
    assert_difference('Product.count', -1) do
      delete :destroy, id: @product
    end

    assert_redirected_to products_path
  end
end
