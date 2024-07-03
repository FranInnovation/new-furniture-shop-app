
import { newClient } from '@/lib/actions';
import classes from './page.module.css';

export default function AddNewClient() {
    return (
        <>
            <header className={classes.header}>
                <h1>New Client Page</h1>
            </header>
            <main className={classes.main}>
                <form action={newClient} className={classes.form}>
                    <div>
                        <p>
                            <label htmlFor="name" className={classes.label}>Client name</label>
                            <input type="text" id="name" name="name" className={classes.input} required />
                        </p>
                        <p>
                            <label htmlFor="lastname" className={classes.label}>Client lastname</label>
                            <input type="text" id="lastname" name="lastname" className={classes.input} required />
                        </p>
                        <p>
                            <label htmlFor="email" className={classes.label}>Client email</label>
                            <input type="email" id="email" name="email" className={classes.input} required />
                        </p>
                        <p>
                            <label htmlFor="document" className={classes.label}>Client document</label>
                            <input type="text" id="document" name="document" className={classes.input} required />
                        </p>
                        <p>
                            <label htmlFor="birthdate" className={classes.label}>Client birthdate</label>
                            <input type="date" id="birthdate" name="birthdate" className={classes.input} required />
                        </p>
                        <button type="submit" className={classes.button}>Submit Client</button>
                    </div>
                </form>
            </main>
        </>
    );
}
