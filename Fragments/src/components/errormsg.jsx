import PropTypes from 'prop-types'; 
const Errormsg = ({items}) => {
  return (
    <>
      {/* {fooditems.length==0 ?<h3>Hungry</h3>:null } */}
      {items.length == 0 && <h3>Hungry</h3>}
    </>
  );
};
Errormsg.propTypes = {
  items: PropTypes.array.isRequired,
};
export default Errormsg;

