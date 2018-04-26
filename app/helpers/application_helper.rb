module ApplicationHelper

  def bootstrap_notification
    flash_messages = []
    flash.each do |type, message|
      type = :success if type == 'notice'
      type = :error   if type == 'alert'
      text = "<script>toastr.#{type}(\"#{message}\");</script>"
      flash_messages << text.html_safe if message
    end
    flash_messages.join("\n").html_safe
  end

  def events_categories
    {
      'Rendez Vous' => 'appointment',
      'Appel téléphonique' => 'call',
      'Réunion' => 'meeting',
      'Tâche' => 'task',
      'Email' => 'mail'
    }
  end
end
