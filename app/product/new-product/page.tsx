import { newProduct } from '@/lib/actions'

export default function AddNewProduct() {
    return (
        <>
        <header>
            <h1>New Product</h1>
        </header>
        <main>
            <form action={newProduct}>
                <div>
                    <p>
                    <label htmlFor="description">Product description</label>
                    <input type="text" id="description" name="description" required />
                    </p>
                    <p>
                    <label htmlFor="price">Product price</label>
                    <input type="number" id="price" name="price" required />
                    </p>

                    <button type="submit">Submit Product</button>
                </div>
            </form>    
        </main>
        </>
    )
}