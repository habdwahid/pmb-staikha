<?php

namespace App\Notifications\Register;

use Illuminate\Bus\Queueable;
use App\Models\BuktiPendaftaran;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class SendEmailBuktiPendaftaran extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        protected BuktiPendaftaran $buktiPendaftaran,
    ) {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Tanda Bukti Pendaftaran - STAIKHA')
            ->line('Berikut adalah tanda bukti pendaftaran')
            ->attach(public_path() . '/storage/' . $this->buktiPendaftaran->bukti_pendaftaran, [
                'as' => str($this->buktiPendaftaran->bukti_pendaftaran)->after('bukti pendaftaran/'),
                'mime' => 'application/pdf',
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
