import { connect } from 'react-redux';
import Page from 'src/components/Page';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  page: state.auth.user.role,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Page);