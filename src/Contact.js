import React from 'react';
 
const Contact = () => {
    return (
        <div class="container">
        <form>
      
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      
          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
          <label>Email</label>
          <input type="text" id="email" name="email" placeholder="Enter email "/>
      
          
      
          <label >Comment</label>
          <textarea id="Comment" name="Comment" placeholder="Write something.."></textarea>
      
          <input type="submit" value="Submit"/>
      
        </form>
      </div>
    );
}
 
export default Contact;
