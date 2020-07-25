export default (name = '') => {
    let value = "R$ " + name.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return value;
}
  
