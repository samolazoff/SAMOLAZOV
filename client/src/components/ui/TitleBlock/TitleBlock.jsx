import './TitleBlock.scss';

const TitleBlock = (props) => {

    const {txt} = props;

    return (
        <h2 className='title-block'>
            {txt}
        </h2>
    );
};

export default TitleBlock;