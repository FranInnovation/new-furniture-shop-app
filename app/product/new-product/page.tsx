
import { newProduct } from '@/lib/actions';
import classes from './page.module.css';

export default function AddNewProduct() {
    return (
        <>
            <header className={classes.header}>
                <h1>New Product</h1>
            </header>
            <main className={classes.main}>
                <form action={newProduct} className={classes.form}>
                    <div>
                        <p>
                            <label htmlFor="description" className={classes.label}>Product description</label>
                            <input type="text" id="description" name="description" className={classes.input} required />
                        </p>
                        <p>
                            <label htmlFor="price" className={classes.label}>Product price</label>
                            <input type="number" id="price" name="price" className={classes.input} required />
                        </p>
                        <button type="submit" className={classes.button}>Submit Product</button>
                    </div>
                </form>    
            </main>
        </>
    )
}
