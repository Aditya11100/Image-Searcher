import React from 'react';

class SearchBar extends React.Component{
    state={term:''};
    onSubmitForm=(event)=>{
            event.preventDefault();
            this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="field">
                        <label htmlFor='input' className="text">Input Text</label>
                        <input type='text' id='input' placeholder='Type then press Enter' value={this.state.term} onChange={(e)=>this.setState({term:e.target.value.toUpperCase()})}></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;