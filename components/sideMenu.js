import { createMovie } from "../actions";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { useRouter } from 'next/router';

const SideMenu = (props) => {
    const { categories } = props;
    let modal = null;
    const router = useRouter();
    
    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal();
            router.push('/');
        })
    }

    return (
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list- group">
                {categories.map((category) =>
                    <a 
                    onClick={() => props.changeCategory(category.name)}
                    key={category.id} href="#" 
                    className={`list-group-item ${props.activeCategory === category.name ? 'active' : null}`}>
                        {category.name}
                        </a>
                )}
            </div>

        </div>
    )
}

export default SideMenu;