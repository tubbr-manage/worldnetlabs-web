<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  
  $receiving_email_address = 'dhruv@tubbrinternet.com';

  if( file_exists($php_email_form = 'php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = false;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = 'WNL WEBSITE Inquiry Form';
  
  $contact->add_message( $_POST['first_name'], 'First Name');
  $contact->add_message( $_POST['last_name'], 'Last Name');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['telcode'], 'Tel Code');
  $contact->add_message( $_POST['phone'], 'Phone');
  $contact->add_message( $_POST['how_help'], 'How can we help you?"');
  $contact->add_message( $_POST['when'], 'How soon do you want to be get Started?');

  echo $contact->send();
  ?>