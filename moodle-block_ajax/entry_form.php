<?php

defined('MOODLE_INTERNAL') || die;

require_once($CFG->libdir.'/formslib.php');

class entry_form extends moodleform
{
    function definition(){
        global $USER, $CFG;
//        $formdata = $this->_customdata['data'];
        $mform = & $this->_form;

        $line_array = array();
        $line_array[] =& $mform->createElement('button', 'agree', get_string('agree', 'block_ajax'));
        $line_array[] =& $mform->createElement('button', 'disagree', get_string('disagree', 'block_ajax'));
        $mform->addGroup($line_array, 'line', '勉強会コース', array(' '), false);
        $mform->addElement('static', 'agree_label', '10/10');

        // $mform->addElement('static', 'agree_label', '10/10');
        // $mform->addElement('button', 'agree', get_string('agree', 'block_ajax'));
        // $mform->addElement('button', 'disagree', get_string('disagree', 'block_ajax'));
    }
    
}