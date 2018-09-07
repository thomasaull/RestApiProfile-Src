<?php namespace ProcessWire;

require_once dirname(__FILE__) . "/ApiHelper.php";

class Test
{
  public static function getSomeData($data) {
    // return 'Api Endpoint: ' . date(DATE_ISO8601);
    
    // get user from user id
    $user = wire('users')->get($data->userId);

    $response = new \StdClass();
    $response->user = $user->name;

    return $response;
  }

  public static function postWithSomeData($data) {
    // Check for required parameter "message" and sanitize with PW Sanitizer
    $data = ApiHelper::checkAndSanitizeRequiredParameters($data, ['message|text']);

    return "Your message is: " . $data->message;
  }
}