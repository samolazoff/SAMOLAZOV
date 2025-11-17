import './SubtitleBlock.scss';

const SubtitleBlock = (props) => {

    const {txt} = props;

    return (
        <h3 className='subtitle-block'>
            {txt}
        </h3>
    );
};

export default SubtitleBlock;