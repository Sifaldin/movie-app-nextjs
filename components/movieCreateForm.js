import { useEffect, useState } from "react";

const MovieCreateForm = (props) => {

    /*  const[isInitialDataLoaded, setIsInitialDataLoaded] = useState(false); */

    const formData = props.initialData ? { ...props.initialData } : {
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
    }

    const [form, setForm] = useState(formData);


    /* useEffect(() => {
        console.log(props.initialData)
        if(props.initialData){
            setForm(props.initialData)
            setIsInitialDataLoaded(true)
        }
    }, [isInitialDataLoaded]) */

    const handleChange = (e) => {
        const { value } = e.target;
        const target = e.target;
        const name = target.name;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleGenreChange = (e) => {
        const { options } = e.target
        const optLength = options.length;
        let value = [];

        for (let i = 0; i < optLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }
        setForm({
            ...form,
            genre: value.toString()
        });
    }

    const submitForm = () => {
        props.handleFormSubmit({ ...form });
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleChange}
                        value={form.name}
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Lord of the Rings" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>

                    <input
                        onChange={handleChange}
                        name="description"
                        value={form.description}
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Somewhere in Middle-earth..." />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Rating</label>
                    <input
                        onChange={handleChange}
                        value={form.rating}
                        name="rating"
                        type="number"
                        max="5" min="0"
                        className="form-control"
                        id="rating"
                        placeholder="3" />
                    <small
                        id="emailHelp"
                        className="form-text text-muted">Max: 5, Min: 0 </small>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        onChange={handleChange}
                        value={form.image}
                        name="image"
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="http://....." />
                </div>
                <div className="form-group">
                    <label htmlFor="cover">Cover</label>
                    <input
                        onChange={handleChange}
                        value={form.cover}
                        name="cover"
                        type="text" className="form-control" id="cover" placeholder="http://......" />
                </div>

                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select onChange={handleGenreChange} multiple className="form-control" id="genre">
                        <option>drama</option>
                        <option>music</option>
                        <option>adventure</option>
                        <option>historical</option>
                        <option>action</option>
                    </select>
                </div>
                <button
                    type="button"
                    className="btn btn-primary mb-1"
                    onClick={submitForm}>
                    {props.submitButton || 'Create'}
                </button>
            </form>
        </div>
    )
}

export default MovieCreateForm;